document.getElementById('addTodo').addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const dueDate = document.getElementById('dueDate').value;
  const assignee = document.getElementById('assignee').value;
  const attachments = document.getElementById('attachments').files;

  if (!title) return alert("Title is required!");

  const todoList = document.getElementById('todoItems');

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-start';

  const content = document.createElement('div');
  content.innerHTML = `
    <div class="fw-bold">${title}</div>
    <div>${description || ''}</div>
    <small class="text-muted">Due: ${dueDate || 'N/A'}</small><br>
    ${assignee ? `<span class="badge bg-info text-dark">${assignee}</span>` : ''}
    ${attachments.length ? `<span class="badge bg-secondary">${attachments.length} attachments</span>` : ''}
  `;

  const btnGroup = document.createElement('div');
  btnGroup.innerHTML = `
    <button class="btn btn-sm btn-outline-success me-1"><i class="bi bi-check-lg"></i></button>
    <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
  `;

  btnGroup.querySelector('.btn-outline-danger').addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(content);
  li.appendChild(btnGroup);
  todoList.appendChild(li);

  // Reset form
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('dueDate').value = '';
  document.getElementById('assignee').value = '';
  document.getElementById('attachments').value = '';
});
