Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

It is a comparison sort, meaning that it can sort items of any type for which a “less-than” relation is defined.

Quicksort uses these steps.

Choose any element of the array to be the pivot. There are multiple ways of selecting a pivot; explore the options and note their advantages.

Divide all other elements (except the pivot) into two partitions.

All elements less than the pivot must be in the first partition.

All elements greater than the pivot must be in the second partition.

Recursively apply the above process to the two partitions

Join the first sorted partition, the pivot, and the second sorted partition.

The best pivot creates partitions of equal length (or lengths differing by 1). The worst pivot creates an empty partition (for example, if the pivot is the first or last element of a sorted array).
