import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const alert = (deleteFunction) => MySwal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
    if (result.value) {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        );
        deleteFunction();
    }
});

const alertTime = () => MySwal.fire({
    title: 'Time is Up!!',
    icon: 'warning',
    // showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Reset'
});

export default alert;
export { alertTime };