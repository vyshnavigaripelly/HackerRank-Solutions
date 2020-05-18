function gradingStudents(grades) {
    return grades.map(function(grade)  {
        return (grade >= 38 && grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade;
    });
}