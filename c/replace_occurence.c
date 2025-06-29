#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void replacePattern(char *text, const char *patternP, const char *patternQ) {
    char *pos;
    int lenP = strlen(patternP);
    int lenQ = strlen(patternQ);
    int lenT = strlen(text);

    // Temporary buffer to store the new string
    char *buffer = malloc(lenT + 1);
    if (!buffer) {
        printf("Memory allocation failed.\n");
        return;
    }
    buffer[0] = '\0'; // Ensure it's treated as an empty string

    char *start = text;
    while ((pos = strstr(start, patternP)) != NULL) {
        // Copy the text before the pattern P
        strncpy(buffer, start, pos - start);
        buffer[pos - start] = '\0'; // Null-terminate the copied part

        // Append pattern Q
        strcat(buffer, patternQ);

        // Move the start pointer past the old pattern
        start = pos + lenP;
    }
    // Append the remaining text after the last pattern P
    strcat(buffer, start);

    // Copy the modified text back into the original text array
    strcpy(text, buffer);

    // Free the allocated memory
    free(buffer);
}

int main() {
    char text[1000];
    char patternP[100];
    char patternQ[100];

    // Input the text T
    printf("Enter the text T: ");
    fgets(text, sizeof(text), stdin);
    text[strcspn(text, "\n")] = 0; // Remove newline character

    // Input the pattern P to replace
    printf("Enter the pattern P to replace: ");
    fgets(patternP, sizeof(patternP), stdin);
    patternP[strcspn(patternP, "\n")] = 0; // Remove newline character

    // Input the new pattern Q
    printf("Enter the new pattern Q: ");
    fgets(patternQ, sizeof(patternQ), stdin);
    patternQ[strcspn(patternQ, "\n")] = 0; // Remove newline character

    // Replace the pattern P with pattern Q in the text T
    replacePattern(text, patternP, patternQ);

    // Output the modified text
    printf("Modified text: %s\n", text);

    return 0;
}