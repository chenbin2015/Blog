void Quicksort(int *data, int low, int high)
{
    if (low < high)
    {
        int i = low, j = high, x = data[low];
        while (i < j)
        {
            while (i < j&&data[j] > x)                //从右往左找到第一个小于x的数
                --j;
            data[i] = data[j];

            while (i < j&&data[i] < x)                //从左往右找到第一个大于x的数
                ++i;
            data[j] = data[i];                       //降序排列

        }
        data[i] = x;
        Quicksort(data, low, i - 1);                  //递归调用
        Quicksort(data, i + 1, high);
    }
}