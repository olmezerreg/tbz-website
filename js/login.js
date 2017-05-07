$(document)
    .ready(function() {
        $('.ui.form')
            .form({
                fields: {
                    username: {
                        identifier: 'username',
                        rules: [{
                            type: 'empty',
                            prompt: 'يجب أن تدخل اسم المستخدم'
                        }]
                    },
                    password: {
                        identifier: 'password',
                        rules: [{
                            type: 'empty',
                            prompt: 'يجب أن تدخل كلمة الخاصة بك'
                        }, {
                            type: 'length[6]',
                            prompt: 'يجيب أن تكون كلمة السر 6 أحرف أو أكثر'
                        }]
                    }
                }
            });
    });
