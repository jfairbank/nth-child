# nth-child

Calculate the nth-child equation for CSS selectors.

For example, if you wanted to have a selector for every third child element
(i.e. 1, 4, 7), you would use the selector `nth-child(3n + 1)`. To calculate
this we can take the first two numbers, 1 and 4, and pair them with 0 and 1,
respectively.  We treat each pair as an `(x, y)` coordinate pair where the
desired children numbers are the y coordinates (i.e. `(0, 1)` and `(1, 4)`). We
use these two coordinate pairs to calculate the linear equation that represents
the nth-child selector.

## Install

    $ npm install -g nth-child

## Usage

    $ nth-child n1 n2

## Examples

#### Target every child starting with the second child

    $ nth-child 2 3
    n + 2

#### Target every third child

    $ nth-child 1 4
    3n + 1

#### Target the first two children

    $ nth-child 2 1
    -n + 2
