import React, {useState, useEffect, useRef, useCallback} from 'react'
import { Header, Button, Icon, Input, Popup } from 'semantic-ui-react';

// Credits to Ankur Sheel for help with Canvas using hooks

function Canvas(props) {
    const [mousePosition, setMousePosition] = useState();
    const [isPainting, setIsPainting] = useState(false)
    const [color, setColor] = useState("#ff0000")
    const [popup, setPopup] = useState(false)
    const canvasRef = useRef(null)
    
    const colorHandler = (event) => {
        setColor(event.target.value)
    }

    const startPaint = useCallback((event) => {
        event.preventDefault()
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setIsPainting(true);
            setMousePosition(coordinates);
        }
    }, []);

    const getCoordinates = (event) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        const offset = canvas.getBoundingClientRect()

        // if touch event exists, remove mouse event listener (since touch events don't exist using mouse)
        if (event.touches) {
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
            canvas.removeEventListener('mousedown', startPaint);
            canvas.removeEventListener('mousemove', paint);
            return {x: event.touches[0].pageX - offset.left, y: (event.touches[0].pageY - window.scrollY - offset.top)};
        } else {
            return {x: event.pageX - offset.left, y: event.pageY - window.scrollY - offset.top};
        }
    };

    const paint = useCallback((event) => {
        if (isPainting) {
            // event.preventDefault()
            const newMousePosition = getCoordinates(event);
            if (mousePosition && newMousePosition) {
                drawLine(mousePosition, newMousePosition);
                setMousePosition(newMousePosition);
            }
        }
    },[isPainting, mousePosition]);

    const drawLine = (originalMousePosition, newMousePosition) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (context) {
            context.strokeStyle = color;
            context.lineJoin = 'round';
            context.lineWidth = 3;

            context.beginPath();
            context.moveTo(originalMousePosition.x, originalMousePosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.closePath();

            context.stroke();
        }
    };

    const exitPaint = useCallback(() => {
        setIsPainting(false);
    }, []);

    const clearCanvas = () => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current
        canvas.addEventListener('touchstart', startPaint);
        canvas.addEventListener('mousedown', startPaint);

        return () => {
            canvas.removeEventListener('touchstart', startPaint);
            canvas.removeEventListener('mousedown', startPaint);
        };
    }, [startPaint]);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.addEventListener('touchmove', paint);
        canvas.addEventListener('mousemove', paint);

        return () => {
            canvas.removeEventListener('touchmove', paint);
            canvas.removeEventListener('mousemove', paint);
        };

    }, [paint]);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.addEventListener('touchend', exitPaint);
        canvas.addEventListener('touchcancel', exitPaint);
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);

        return () => {
            canvas.removeEventListener('touchend', exitPaint);
            canvas.removeEventListener('touchcancel', exitPaint);
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
        };
    }, [exitPaint]);

    return (
        <div className="toolContainer">
            <Header size="medium" icon="pencil" content="Canvas" dividing />
            <Icon name="delete" onClick={props.delete} />     
            <canvas
                ref={canvasRef}
                width="274px"
                height="202px"
                style={{"border":"1px solid black"}}
            />
            <div>
            <Input type="color" list="colorList" value={color} onChange={(e) => colorHandler(e)} />
            <datalist id="colorList">
                <option value="#ff0000" />
                <option value="#000000" />
                <option value="#00ff00" />
                <option value="#0000ff" />
            </datalist>
            <Popup
                    trigger={
                        <Button icon="erase" content="Clear" />
                    }
                    content={<Button color='red' content='Clear Canvas?' onClick={clearCanvas}  />}
                    on='click'
                    onOpen={() => setPopup(true)}
                    onClose={() => setPopup(false)}
                    position='top center'
                    open={popup}
                />
            </div>
        </div>
    )
}

export default Canvas
