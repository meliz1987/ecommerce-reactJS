import Swal from 'sweetalert2'


export function executeBasicSweet(title, text, icon, textButton) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: textButton,
        customClass: {
      title: 'swal-title',
      popup: 'swal-popup',
      confirmButton: 'swal-button'
    }
      })
}

export function confirmSweetAlert({ title, confirmText = "Sí", denyText = "No" }) {
  return Swal.fire({
    title: title,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: confirmText,
    denyButtonText: denyText,
    customClass: {
      title: 'swal-title',
      popup: 'swal-popup',
      confirmButton: 'swal-button'
    }
  });
}