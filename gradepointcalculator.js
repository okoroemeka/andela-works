class gradePointCal{

    constructor(){
        this.grades = {"A":5.0, "B":4.0, "C":3.0, "D":2.0, "E":1, "F":0.0};
        this._totalGp = 0;
        this._subject = '';
        this._grade =  '';
        this._classGrade = '';
        this._unit = 0;
        this._totalUnit = 0;
        this._averageGp = 0;
        this._subjects = {};
    }

    calculator(){
        const numberOfSubjects = parseInt( prompt('enter number of courses taken: '));

        for (let i = 0; i < numberOfSubjects; i++) {

            /*eneter each course taken*/
            this._subject = prompt('enter subject')

            /*enter your grade for each course*/
            this._grade = prompt('enter your grade: ');

            /*enter the unit of each course*/
            this._unit = parseInt(prompt('enter unit of course'));

            /* adding up the units*/
            this._totalUnit += this._unit;

            /* checking if subject has alraedy been inputed by the user before*/ 
            if (this._subject in this._subjects) {
                alert('course already exist');
            }
            else{
                this._subjects[this._subject] = [this._grade, this._unit];
            }
            /* Adding up the grade points*/
            this._totalGp += this.grades[this._grade] * this._unit
        }
        /* calculating the average grade point*/
        this._averageGp = parseFloat( this._totalGp / this._totalUnit);

        /* CHECKING USERS CLASSGRADE*/
        switch (true) {
            case this._averageGp >= 2.5 && this._averageGp < 3.5:
                this._classGrade = "SECOND CLASS LOWER DIVISION";
                break;

            case this._averageGp >= 3.5 && this._averageGp < 4.5:
                this._classGrade = "SECOND CLASS upper DIVISION";
                break;

            case this._averageGp >= 4.5:
                this._classGrade = "FIRTS CLASS DIVISION, YOU ARE A GENUIS";
                break;
        
            default:
                this._classGrade = ' MY BROTHER JUST REPEAT THAT YEAR OR CHANGE DEPARTMENT FOR YOUR FUTURE SAKE.';
                break;
        }
    
        return [this._subjects,this._averageGp,this._classGrade]

    }
}