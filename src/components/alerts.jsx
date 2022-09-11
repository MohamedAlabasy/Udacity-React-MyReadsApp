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

export const showBook = (bookData) => {
    console.log(bookData);
    Swal.fire({
        title: bookData.title,
        width: '80%',
        html:
            `
            <div class="container row justify-content-center text-center">
            <div class="col-lg-6 col-6 card">
                <div class="card-header border-0 text-center font-weight-bold ${bookData.shelf === 'read' ? 'bg-success text-white' : bookData.shelf === 'wantToRead' ? 'bg-danger text-white' : 'bg-primary text-white'}">${bookData.shelf}</div>
                <div class="card-body ">
                    <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                        <p class="text-center font-weight-bold">
                            ${bookData.description || 'No bookData to show'}
                        </p >
                    </div >
                    <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                        <p class="d-flex flex-column text-center font-weight-bold ms-5">
                        pageCount
                            <span class="text-muted"> ${bookData.pageCount}</span>
                            </p>
                            <p class="d-flex flex-column text-center font-weight-bold me-5">
                            Rate
                            <span class="text-muted"> ${bookData.averageRating || '0'}</span>
                        </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center mb-0">Authors : ${bookData.authors}</div>
                </div >
            </div >
            <div class="col-lg-6 col-6 card justify-content-center">
            <img src=${bookData.imageLinks.smallThumbnail}   alt='image2' />
            </div >
        </div >
    `
    })
}