const program6 = {
  id: 6,
  title: "Program 6 - String Operations (Copy & Substring)",
  lang: "c",
  code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define L 50

void copy(char *s1, char *s2);
int substring(char *s1, char *s2);

int main()
{
    char str1[L], str2[L];
    int choice, r;

    while (1)
    {
        printf("\\nString Operations");
        printf("\\n------------------");
        printf("\\n1. Copy");
        printf("\\n2. Substring");
        printf("\\n3. Exit");
        printf("\\nEnter your choice: ");
        scanf("%d", &choice);
        getchar();

        switch (choice)
        {
        case 1:
            printf("Enter string 1: ");
            fgets(str1, L, stdin);
            str1[strcspn(str1, "\\n")] = '\\0';

            printf("Enter string 2: ");
            fgets(str2, L, stdin);
            str2[strcspn(str2, "\\n")] = '\\0';

            copy(str1, str2);
            printf("After copying, String 1: %s\\n", str1);
            break;

        case 2:
            printf("Enter main string: ");
            fgets(str1, L, stdin);
            str1[strcspn(str1, "\\n")] = '\\0';

            printf("Enter sub string: ");
            fgets(str2, L, stdin);
            str2[strcspn(str2, "\\n")] = '\\0';

            r = substring(str1, str2);
            if (r == -1)
                printf("Substring not found\\n");
            else
                printf("Substring found at position %d\\n", r + 1);
            break;

        case 3:
            exit(0);

        default:
            printf("Wrong choice\\n");
        }
    }
}

void copy(char *s1, char *s2)
{
    while (*s2 != '\\0')
    {
        *s1 = *s2;
        s1++;
        s2++;
    }
    *s1 = '\\0';
}

int substring(char *s1, char *s2)
{
    int n = strlen(s1);
    int m = strlen(s2);
    int i, j;

    for (i = 0; i <= n - m; i++)
    {
        for (j = 0; j < m; j++)
        {
            if (s1[i + j] != s2[j])
                break;
        }
        if (j == m)
            return i;
    }
    return -1;
}`
};

export default program6;
