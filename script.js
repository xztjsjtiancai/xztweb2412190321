document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        // 阻止表单默认提交行为（防止页面刷新）
        event.preventDefault();

        // 获取输入框的值
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // 简单的验证逻辑
        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // 如果验证通过
        console.log('Registration Successful');
        console.log('Username:', username);
        console.log('Email:', email);
        
        // 这里可以添加发送数据到服务器的代码 (例如 fetch 或 axios)
        alert('Registration successful! Check console for details.');
    });
});