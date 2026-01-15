const program5 = {
  id: 5,
  title: "Program 5 - String Operations (Length & Concatenation)",
  lang: "c",
  code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define L 50

int length(char *s);
void concat(char *s1, char *s2);

int main()
{
    char str1[L], str2[L];
    int choice;

    while (1)
    {
        printf("\\nString Operations");
        printf("\\n------------------");
        printf("\\n1. Length");
        printf("\\n2. Concatenation");
        printf("\\n3. Exit");
        printf("\\nEnter your choice: ");
        scanf("%d", &choice);
        getchar();

        switch (choice)
        {
        case 1:
            printf("Enter a string: ");
            fgets(str1, L, stdin);
            str1[strcspn(str1, "\\n")] = '\\0';
            printf("Length of %s is %d\\n", str1, length(str1));
            break;

        case 2:
            printf("Enter string 1: ");
            fgets(str1, L, stdin);
            str1[strcspn(str1, "\\n")] = '\\0';

            printf("Enter string 2: ");
            fgets(str2, L, stdin);
            str2[strcspn(str2, "\\n")] = '\\0';

            if (length(str1) + length(str2) >= L)
                printf("Strings too long to concatenate\\n");
            else
            {
                concat(str1, str2);
                printf("Concatenated string: %s\\n", str1);
            }
            break;

        case 3:
            exit(0);

        default:
            printf("Wrong choice\\n");
        }
    }
}

int length(char *s)
{
    int l = 0;
    while (*s != '\\0')
    {
        l++;
        s++;
    }
    return l;
}

void concat(char *s1, char *s2)
{
    while (*s1 != '\\0')
        s1++;
    while (*s2 != '\\0')
    {
        *s1 = *s2;
        s1++;
        s2++;
    }
    *s1 = '\\0';
}`
};

export default program5;
