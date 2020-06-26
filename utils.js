module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 ||
            month == 0 &&
            today.getDate() <= birthDate.getDate()) {
                age = age - 1
            }
            
        return age
<<<<<<< HEAD
    },

    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthday: `${day}/${month}`
        }
    },

    graduation(value) {
        if (value == 'EM' ) {
            return "Ensino Médio Completo"
        } else if (value == 'ES' ) {
            return "Ensino Superior Completo"
        }
        else if (value == 'ME' ) {
            return "Mestrado"
        }
        else if (value == 'DR' ) {
            return "Doutorado"
        }
    },

    fschoolyear(value) {
        if (value == '5F' ) {
            return "5º ano do ensino fundamental"
        } else if (value == '6F' ) {
            return "6º ano do ensino fundamental"
        } else if (value == '7F' ) {
            return "7º ano do ensino fundamental"
        } else if (value == '8F' ) {
            return "8º ano do ensino fundamental"
        } else if (value == '1M' ) {
            return "1º ano do ensino médio"
        } else if (value == '2M' ) {
            return "2º ano do ensino médio"
        } else if (value == '3M' ) {
            return "3º ano do ensino médio"
        } 
=======
>>>>>>> parent of 132cba8... Layout finalizado
    }
}