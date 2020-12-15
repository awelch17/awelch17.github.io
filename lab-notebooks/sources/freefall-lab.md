# Freefall Lab

![](https://i.ytimg.com/vi/B52BrdY_uA4/maxresdefault.jpg)

## Introduction

We attempted to measure the height of Mason's ceiling by dropping a pencil from the top of it and measuring how long it took for the pencil to hit the floor. By using the 1D kinematics equations (in particular, `d = vt + (a*t^2)/2`), we should be able to find out how far the pencil travelled during its fall, and by extension, the height of the ceiling. We should then be able to get a second estimate by comparing known heights of objects to the height of the ceiling, and use this to determine whether or not the estimate found earlier was accurate. My hypothesis is that this method of estimating the height of the ceiling will be reasonably accurate, and will be confirmed by the verification method.

## Procedure

### Materials

- Pencil
- Stopwatch
- Mason's Room

### Method

Hold the pencil next to the ceiling. Simultaneously release the pencil and start the stopwatch, and then stop the stopwatch when the pencil hits the floor. Record the time on the stopwatch. Repeat as many times as desired, in this case 10.

Once finished, find an accurate estimate of how long it takes for the pencil to fall from the ceiling to the floor by averaging the data points collected earlier.

Plug the value found into the equation `d = vt + (a*t^2)/2`. Since the initial velocity of the pencil was 0 (it was not moving before it was dropped), the equation can be simplified to `d = (a*t^2)/2`. Since the only major force accelerating the pencil is gravity, `a` in the equation will be `-9.8m/s^2`. This yields a new equation of `d = (-9.8m/s^2 * t^2)/2`. The average free-fall time found earlier can be substituted for `t`, and then the equation solved for `d`. The value of `t` is the distance the pencil fell to get to the floor. However, this will be a negative number, since the pencil is falling on the y axis. The height of the ceiling will be the absolute value of this number.

To verify this result, a similarly sized object of which the height is known should be used to find a second estimate. For example, if a person is known to be 60 inches tall and is approximately half the height of the ceiling, then the ceiling is approximately 120 inches tall.

## Results

| Trial Number | Result |
| - | - |
| 1 | 0.73 seconds |
| 2 | 0.73 seconds |
| 3 | 0.73 seconds |
| 4 | 0.71 seconds |
| 5 | 0.77 seconds |
| 6 | 0.71 seconds |
| 7 | 0.85 seconds |
| 8 | 0.65 seconds |
| 9 | 0.65 seconds |
| 10 | 0.74 seconds |

The average of these results is calculated by adding together the results and dividing the resulting value by the number of trials.

`(0.73 + 0.73 + 0.73 + 0.71 + 0.77 + 0.71 + 0.85 + 0.65 + 0.65 + 0.74) / 10 = 0.727`

The value found, `0.727` seconds, is substituted into the equation described in the procedure, and the equation is then solved.

`d = (-9.8m/s^2 * [0.727s]^2)/2`

`d = (-9.8m/s^2 * 0.528529s^2)/2`

`d = -2.5897921m`

The estimate of the height of the ceiling is approximately `2.59m`, which is approximately `8.5ft` or `102 in.`

Mason is 70 inches tall, and is approximately 2/3 the height of the ceiling. A simple equation of ratios will yield a verification estimate.

`h/1 = 70 in./0.66`

`h = 105 in.`

The second estimate of the height of the ceiling is `105` inches, which is very close to the first estimate of `102` inches.

## Potential Errors

Given the very short time it takes for the pencil to fall from the ceiling, it is possible that the human measuring the time with the stopwatch did not react fast enough to get an accurate reading. It is also possible that the human recording the data did not start the stopwatch at exactly the right time, or that the stopwatch was somehow defective.

It is also possible that some force other than gravity had a significant impact on the fall of the pencil (e.g. air resistance). In this case, our equations which only considered gravity would be inaccurate.

However, we also used a different method for measuring the height of the ceiling, and it yielded a similar result. Although it is possible that this other method was also flawed, it is unlikely that both methods were flawed and still gave similar results. I believe that it is rational to conclude that both methods were reasonably accurate, and that none of the aforementioned potential errors occurred.

## Conclusion

The similarity between our two estimates suggests that my hypothesis was correct: we were indeed able to accurately estimate the height of Mason's ceiling using only a pencil, a stopwatch, and the 1D kinematics equations.

The importance of this lab in respect to our overall study of forces is that it lets us apply our knowledge of physics to a real-world problem, and gives us further practice with these concepts.
