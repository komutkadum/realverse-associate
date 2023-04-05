import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const sendEmail = (e, setLoading, form, router) => {
  setLoading(true);
  e.preventDefault();
  try {
    emailjs
      .sendForm(
        'service_v1iv2d7',
        'template_5jw1ocp',
        form.current,
        'Rc58EKJornQRy9ZdW'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: 'Form Submitted Successfully',
            icon: 'success',
            text: 'We will get back to you as soon as possible.',
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              router.reload();
            }
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  } catch (err) {
    console.log(err);
    Swal.fire({
      title: 'Form Submition failed!',
      icon: 'error',
      text: 'Please Try Again later',
      allowOutsideClick: false,
    });
  } finally {
    setLoading(false);
  }
};
