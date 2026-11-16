        let mail
        let age
        let pol 
        let fio
        do {
            fio = prompt("Введите ФИО:", "Вася Пипкин");
        }
        while (!confirm(fio + "\nВсе верно?"));
        do {
            pol = prompt("Введите пол:");
        }
        while (!confirm(pol + "\nВсе верно?"));
        do {
            age = parseInt(prompt("Введите возраст:"));
        }
        while ((!confirm(age + "\nВсе верно?")) || !(parseInt(age)<100));
        console.log((parseInt(age)<100))
        console.log(true&&(parseInt(age)<100))
        do {
            mail = prompt("Введите почту:", "aaa@gmail.com");
        }
        while (!confirm(mail + "\nВсе верно?"));
        
        alert("Спасибо за предоставленную информацию!")
        