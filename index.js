function Student(name, roll_no, Studentclass, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.Studentclass = Studentclass;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
    this.printTop3Subjects = function() {
      const subjects = Object.keys(this.marks_of_5_subjects);
      const sortedSubjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
      const top3Subjects = sortedSubjects.slice(0, 3);
      console.log(`Top 3 subjects: ${top3Subjects.join(', ')}`);
    };
  
    
    this.printReportCard = function() {
      console.log("+--------------------+");
      console.log("|     REPORT CARD    |");
      console.log("+--------------------+");
      console.log(`| Name     - ${this.name} |`);
      console.log(`| Roll no. - ${this.roll_no} |`);
      console.log(`| Class    - ${this.Studentclass} |`);
      console.log(`| Section  - ${this.section} |`);
      for (const subject in this.marks_of_5_subjects) {
        console.log(`| ${subject}  - ${this.marks_of_5_subjects[subject]} |`);
      }
      const totalMarks = Object.values(this.marks_of_5_subjects).reduce((sum, marks) => sum + marks);
      const percentage = (totalMarks / 5).toFixed(2);
      console.log(`| Prectage - ${percentage} % |`);
      console.log("+--------------------+");
    };
  }
  

  const student = new Student('Huzaifa', 16, 'X', 'A', {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
  });
  
  student.printTop3Subjects();
  student.printReportCard();
  