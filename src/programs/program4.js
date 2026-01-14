const program4 = {
  id: 4,
  title: "Program 4 - Matrix Addition and Subtraction (C)",
  lang: "c",
  code: `#include <stdio.h>

int main()
{
    int i, j, r, c;
    int A[10][10], B[10][10], S[10][10], D[10][10];

    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);

    printf("Enter Matrix A:\\n");
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            scanf("%d", &A[i][j]);

    printf("Enter Matrix B:\\n");
    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
            scanf("%d", &B[i][j]);

    for (i = 0; i < r; i++)
        for (j = 0; j < c; j++)
        {
            S[i][j] = A[i][j] + B[i][j];
            D[i][j] = A[i][j] - B[i][j];
        }

    printf("Addition:\\n");
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
            printf("%d ", S[i][j]);
        printf("\\n");
    }

    printf("Subtraction:\\n");
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
            printf("%d ", D[i][j]);
        printf("\\n");
    }

    return 0;
}`
};

export default program4;
