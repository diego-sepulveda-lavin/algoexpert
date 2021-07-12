/* 
    It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you will be 
    photographing has an even number of students, and all these students are wearing red or blue shirts. In fact, exactly half 
    of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the 
    students in two rows before taking the photo. Each row should contain the same number of students and should adhere to the
    following guidelines:

    - All students wearing red shirts must be in the same row
    - All students wearing blue shirts must be in the same row
    - Each student in the back row must be strictly taller than the student directly in front of them in the front row

    You're given two input arrays: one containing the heights of all the students with red shirts and another one containing the
    heights of all the students with blue shirts. These arrays will always have the same length, and each height will be a positive
    integer. Write a function that returns whether or not a class photo that follows the stated fuidelines can be taken.

    Note: You can assume that each class has at least 2 students.

    Sample Input:
    redShirtHeights = [5,8,1,3,4]
    blueShirtHeights = [6,9,2,4,5]

    Sample Output:
    true // Place all student with blue shirts in the back row

*/

const redShirtHeights = [6, 9, 2, 4, 5, 1]; // [ 1, 2, 4, 5, 6, 9 ]
const blueShirtHeights = [5, 8, 1, 3, 4, 9]; // [ 1, 3, 4, 5, 8, 9 ]

export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  const sortingFunc = (a: number, b: number) => a - b;
  redShirtHeights.sort(sortingFunc); // sort red students from smallest to tallest
  blueShirtHeights.sort(sortingFunc); // sort blue students from smallest to tallest

  let allRedTaller = true; // assume red students are tallest
  let allBlueTaller = true; // assume blue students are tallest

  // iterate over each student height
  for (let i = 0; i < redShirtHeights.length; i++) {
    let redStudentHeight = redShirtHeights[i];
    let blueStudentHeight = blueShirtHeights[i];

    if (redStudentHeight <= blueStudentHeight) {
      allRedTaller = false; // if current red student height <= blue student height then all the red students are not taller
    }

    if (redStudentHeight >= blueStudentHeight) {
      allBlueTaller = false; // if current blue student height <= red student height then all the blue students are not taller
    }
  }

  return allRedTaller || allBlueTaller; // if all red students are not taller or all blue students are taller, photo cannot be taken
}

console.log(classPhotos(redShirtHeights, blueShirtHeights));
