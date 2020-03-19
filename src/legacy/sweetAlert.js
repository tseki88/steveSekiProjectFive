import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const alert = (deleteFunction) => MySwal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2ec4b6',
    cancelButtonColor: '#ff3366',
    confirmButtonText: 'Yes'
}).then((result) => {
    if (result.value) {
        Swal.fire(
            'Deleted!',
            'Deleted.',
            'success'
        );
        deleteFunction();
    }
});

const alertTime = () => MySwal.fire({
    title: 'Time is Up!!',
    icon: 'warning',
    confirmButtonColor: '#2ec4b6',
    cancelButtonColor: '#ff3366',
    confirmButtonText: 'Reset'
});

export default alert;
export { alertTime };