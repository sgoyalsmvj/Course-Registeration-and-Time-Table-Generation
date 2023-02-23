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
	'CSE': new School('Z', 'Computer Science Engineering', [])
	
};

let courses = {

	// 'B201': new Course('Artificial Intelligence (LH2)', 'MicroBio', 'C'),
	// 'B202': new Course('Biochemistry (LH3)', 'Biochem', 'E'),

	// 'B301': new Course('Animal Physiology (B1)', 'AnimPhys', 'A'),
	// 'B302': new Course('Plant Physiology (B1)', 'PlantPhys', 'E'),
	// 'B303': new Course('Ecology (LH5)', 'Ecology', 'J'),
	// 'B354': new Course('Neurobiology', 'NeuroBio', 'A'),
	// 'B350': new Course('Structural Biology (B4)', 'StructBio', 'B'),

	// 'B402': new Course('Developmental Biology (B5)', 'DevBio', 'A'),
	// 'B403': new Course('Bioinformatics (LH2)', 'BioInfo', 'E'),
	// 'B451': new Course('Advanced Cell Biology (B5)', 'AdvCellBio', 'D'),

	// 'B551': new Course('Advanced Molecular Biology (B3)', 'AdvMolBio', 'B'),
	// 'B555': new Course('Advanced Genetics (B2)', 'AdvGen', 'C'),

    // CSE
	'Z501': new Course('Artificial Intelligence (LH3)', 'AI', 'A'),
	'Z502': new Course('Computer Security (LH2)', 'CS', 'D'),
	'Z503': new Course('Introduction To Data Science (LH4)', 'IDS', 'B'),

	'Z504': new Course('Software Engineering (C6)', 'SE', 'F'),
	'Z505': new Course('Elective-2(CG/WEBSEC)', 'E-2', 'E'),	
	'Z506': new Course('Elective-3(MULTISYS/NLP)', 'E-3', 'C'),	
	'Z507': new Course('Elective-4(PAVFM/IMAD)', 'E-4', 'G'),	
	'Z701': new Course('Elective-8', 'E-8', 'H'),	
	'Z702': new Course('Elective-9', 'E-9', 'I'),	
	'Z703': new Course('Elective-10', 'E-10', 'J'),	
	'Z704': new Course('Elective-11', 'E-11', 'K'),
	

	// 'P201': new Course('Classical Mechanics I (LH2)', 'CM1',E'),
	// 'P202': new Course('Mathematical Methods I (LH2)', 'MM1', 'F'),
	// 'P207': new Course('Linear Optics (P107)', 'LinOptics', 'A'),

	// 'P302': new Course('Statistical Mechanics (LH4)', 'SM', 'E'),
	// 'P303': new Course('Quantum Mechanics II (P127)', 'QM2', 'A'),
	// 'P304': new Course('Special Theory of Relativity (LH3)', 'STR', 'D'),

	// 'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media (P127)', 'CM2', 'D'),
	// 'P405/P305': new Course('Atoms, Molecules and Radiation (P127)', 'AMR', 'E'),
	// 'P453': new Course('Quantum Field Theory I (P108)', 'QFT', 'B'),
	// 'P460': new Course('Many Particle Physics (P109)', 'MPP', 'C'),
	// 'P463': new Course('Astronomy and Astrophysics (P107)', 'AAP', 'C'),
	// 'P466': new Course('Quantum and Nano Elelctronics (P126)', 'QNE', 'A'),
	// 'P475': new Course('Special topics in Quantum Mechanics (P109)', 'STQM', 'A'),
	// 'P476': new Course('Non-Equilibrium Statistical Mechanics (P110)', 'NESH', 'A'),
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
