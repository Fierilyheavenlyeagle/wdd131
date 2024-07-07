// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",

  sections: [
  { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
  { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'} ],

  setNamCod(course) {

    cod = document.getElementById('courseName');
    cod.innerHTML = course.name;

    nam = document.getElementById('courseCode');
    nam.innerHTML = course.code;
  },

  sectionTemplate(section)
  {
    section =  `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  },

  renderSections(sections)
    {
      const html = sections.map(sectionTemplate);
      document.querySelector("#sections").innerHTML = html.join("");
    }
  
};

setNamCod(aCourse)
renderSections(aCourse.sections);

aCourse.enrollStudent = function(sectionNum) {

  const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

  if (sectionIndex >= 0) {
    this.sections[sectionIndex].enrolled++;
    this.renderSections(this.sections);
  }
}

aCourse.dropStudent = function(sectionNum)
{
  const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

  if (sectionIndex >= 0)
    {
      this.sections[sectionIndex].enrolled--;
      this.renderSections(this.sections);
    }
}

aCourse.changeEnrollment = function (sectionNum, add = true )
{
  const sectionIndex = this.sections.findIndex((section)=>section.sectionNum == sectionNum)
  if (sectionNum >= 0)
    if(add)
  {
    this.sections[sectionIndex].enrolled++
  }
    else
    {
      this.sections[sectionIndex.enrolled--]
    }

    }


document.querySelector("#enrollStudent").addEventListener('click', function() {
sectionNum = document.getElementById('sectionNumber').value;
aCourse.enrollStudent(sectionNum);
  //what would the value of 'this' be inside this function?
})

document.querySelector("#dropStudent").addEventListener('click',function() {
  sectionNum = document.getElementById('sectionNumber').value;
  aCourse.dropStudent(sectionNum);
})




