#include <stdio.h>

// Function to calculate the letter grade
char calculate_grade(int term1, int term2, int final, int attendance, int class_test1, int class_test2) {
    // Calculate the average of the best two class test marks
    int class_test_avg = (class_test1 + class_test2) / 2;

    // Calculate the total marks
    int total_marks = term1 + term2 + final + attendance + class_test_avg;

    // Determine the letter grade
    if (total_marks >= 90)
        return 'A';
    else if (total_marks >= 80)
        return 'B';
    else if (total_marks >= 70)
        return 'C';
    else if (total_marks >= 60)
        return 'D';
    else
        return 'F';
}

int main() {
    int T; // Number of test cases
    scanf("%d", &T);

    for (int case_num = 1; case_num <= T; ++case_num) {
        int term1, term2, final, attendance, class_test1, class_test2;
        scanf("%d %d %d %d %d %d %d", &term1, &term2, &final, &attendance, &class_test1, &class_test2);

        char letter_grade = calculate_grade(term1, term2, final, attendance, class_test1, class_test2);
        printf("Case %d: %c\n", case_num, letter_grade);
    }

    return 0;
}