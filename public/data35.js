let year = '2022';
let semester = 'sem-5';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	
	'ECE': new School('P', 'Electronics And Communication Engineering', [])
	
};

let courses = {

	
    // CSE
	'P501': new Course('Digital Communication', 'AI', 'B'),
	'P502': new Course('Economics for Engineers /Psychology, Technology and Society ', 'EFE/PTS', 'E'),
	'P503': new Course('Microprocessors & Interfacing', 'Micro', 'A'),
	'P504': new Course('Digital Signal Processing ', 'DSP', 'F'),		
	'P505': new Course('Elective-1', 'E-1', 'G'),	
	'P701': new Course('Elective-5', 'E-5', 'P'),	
	'P702': new Course('Elective-6', 'E-6', 'H'),	
    'P703': new Course('Elective-7', 'E-7', 'I'),	
	
	

	
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
let colors = [
	"#808080",
	"#DE3163",
	"#FF0000",
	"#800000",
	"#FFFF00",
	"#808000",
	"#00FF00",
	"#008000",
	"#00FFFF",
	"#008080",
	"#0000FF",
	"#000080",
	"#FF00FF",
	"#800080",
	"#40E0D0",
];