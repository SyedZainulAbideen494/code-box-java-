const program3 = {
  id: 3,
  title: "Program 3 - Transpose of a Matrix (C)",
  lang: "c",
  code: `#include <stdio.h>

int main()
{
    int r, c, i, j;
    int a[10][10], t[10][10];

    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);

    printf("Enter elements:\\n");
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            scanf("%d", &a[i][j]);

    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            t[j][i] = a[i][j];

    printf("Transpose Matrix:\\n");
    for (i = 0; i < c; i++)
    {
        for (j = 0; j < r; j++)
            printf("%d ", t[i][j]);
        printf("\\n");
    }

    return 0;
}`
};

export default program3;
