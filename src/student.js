class Student {
    constructor (name = '', kelas = '') {
        this.name = name
        this.kelas = kelas
    }

    setName(name){
        this.name = name
    }
    
    setKelas(kelas){
        this.kelas = kelas
    }
    
    setNim(nim){
        this.nim = nim
    }

    getNim(){
        return this.nim
    }

    getName(){
        return this.name
    }

    getKelas(){
        return this.kelas
    }
}

module.exports = Student