if(user.role !== 'admin') {
  // edit/delete বাটনগুলো hide বা disable করো
  document.querySelectorAll('.btn-delete, .btn-toggle').forEach(btn => btn.style.display = 'none');
}
