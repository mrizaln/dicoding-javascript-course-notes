const { averageExams, isStudentPassExam } = require("../gradeCalculations");


// integration test
describe("grade calculations", () => {
    // unit test
    test("it should return exact average", () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    // integration test
    test("it should return exam passed status", () => {
        const listValueOfExams = [80, 100, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
    });

    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })
});