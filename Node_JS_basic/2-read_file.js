const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const line of students) {
      const [firstName, , , field] = line.split(',');
      if (firstName !== '') {
        if (fields[field]) {
          fields[field].count += 1;
          fields[field].firstNames.push(firstName);
        } else {
          fields[field] = {
            count: 1,
            firstNames: [firstName],
          };
        }
      }
    }

    for (const [field, { count, firstNames }] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${count}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw error;
    }
  }
}

module.exports = countStudents;
