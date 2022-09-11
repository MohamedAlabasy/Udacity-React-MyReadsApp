import Swal from 'sweetalert2'

export const successAlert = (msg = 'Your data has been success') => {
    Swal.fire(
        'success!',
        msg,
        'success'
    )
}
export const failedAlert = (msg = 'Something went wrong!') => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg,
    })
}

export const saveAlert = () => {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })

}


export const showBook = (todoData) => {
    console.log(todoData);
    Swal.fire({
        title: todoData.title,
        width: '80%',
        html:
            `<div class="container row justify-content-center text-center">
            <div class="col-lg-12 col-6 card">
                <div class="card-header border-0 text-center font-weight-bold ${todoData.title === 'high' ? 'bg-danger text-white' : todoData.priority === 'medium' ? 'bg-warning text-dark' : 'bg-primary text-white'}">${todoData.priority}</div>
                <div class="card-body ">
                    <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                        <p class="text-center font-weight-bold">
                            ${todoData.title}
                        </p >
                    </div >
                    <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                        <p class="d-flex flex-column text-center font-weight-bold ms-5">
                            Starts at
                            <span class="text-muted"> todoData.start_date.split('T')[0]</span>
                        </p>
                        <p class="d-flex flex-column text-center font-weight-bold me-5">
                            End at
                            <span class="text-muted">todoData.end_date.split('T')[0]</span>
                        </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center mb-0">${todoData.title}</div>
                </div >
            </div >
        </div >
    `
    })
}