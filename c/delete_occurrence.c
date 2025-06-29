#include <stdio.h>
int main() 
{
    char ch[1000]; 
    char pattern[1000]; 
    char result[1000];
    int i, j, k, isPattern;
    printf("Enter the text T: ");
    fgets(ch, sizeof(ch), stdin);
    printf("Enter the pattern P to delete: ");
    fgets(pattern, sizeof(pattern), stdin);
    // Remove newline character from text and pattern if present
    for (i = 0; ch[i] != '\0'; i++) 
    {
        if (ch[i] == '\n') 
        {
            ch[i] = '\0';
            break;
        }
    }
    for (i = 0; pattern[i] != '\0'; i++) 
    {
        if (pattern[i] == '\n') 
        {
            pattern[i] = '\0';
            break;
        }
    }
    // Initialize result as an empty string
    result[0] = '\0';

    // Process each character of the text
    for (i = 0, k = 0; ch[i] != '\0';) 
    {
        isPattern = 1;
        // Check if the pattern matches at the current position
        for (j = 0; pattern[j] != '\0'; j++) 
        {
            if (ch[i + j] != pattern[j]) 
            {
                isPattern = 0;
                break;
            }
        }
        // If pattern is found, skip the length of the pattern
        if (isPattern && pattern[j] == '\0') 
        {
            i =i + j;
        } 
        else 
        {
            // If pattern is not found, copy the character to the result
            result[k++] = ch[i++];
        }
    }
    // Null-terminate the resulting string
    result[k] = '\0';

    // Print the resulting text
    printf("Text after deleting pattern P: %s\n", result);
    return 0;
}