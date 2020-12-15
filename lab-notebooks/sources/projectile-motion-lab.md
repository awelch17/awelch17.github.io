# Projectile Motion Lab

![](https://static.wikia.nocookie.net/inheritance/images/2/2e/Trebuchet.jpg/revision/latest?cb=20110419103616)

## Introduction

In this lab, I attempted to find the optimal launch angle of an object using a stopwatch and a measuring tape. By using the time spent in the air to determine the initial vertical velocity of the object, and the combination of the distance travelled and initial vertical velocity to find the total initial velocity and launch angle, I should be able to approximate the launch angle of a given trial with only a stopwatch and a measuring tape.

## Procedure

### Materials

- Fish-shaped cat toy
- Measuring tape
- Stopwatch

### Method

Starting at the ground, simultaneously throw the cat toy and start the stopwatch. Stop the stopwatch when the cat toy hits the ground. Record both the time on the stopwatch and the distance travelled by the cat toy. Repeat as many times as desired (in this case 10).

Use this data to calculate the initial launch angle of each trial. This process is made much easier by a spreadsheet with the following columns:

- Theta (Radians)
- Theta (Degrees)
- Range (Meters)
- Time (Seconds)
- Initial Velocity (Meters/Second)

Equations:

Column 1: `=ATAN(9.81*INDIRECT("R[0]C[3]",FALSE)^2/(INDIRECT("R[0]C[2]",FALSE)*2))`

Column 2: `=(INDIRECT("R[0]C[-1]", FALSE)*(180/3.14159))`

Column 5: `=INDIRECT("R[0]C[-2]",FALSE)/(COS(INDIRECT("R[0]C[-4]",FALSE))*INDIRECT("R[0]C[-1]",FALSE))`

Compile the results into a scatter plot, and add a quadratic trendline. Estimate the best launch angle by the vertex of the parabola.

## Results

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTSxqfAxPCZa62BOWQ1OaSN9XnLgkYqb6VioNM78bpHIPjynA73aYXFznxlTz28sXhOmKfvpQ64RqMI/pubhtml?widget=true&amp;headers=false" style="width: 100%; height: 750px;"></iframe>

The vertex of the trendline is around 45 degrees, suggesting that 45 degrees is the optimal launch angle for throwing this object.

## Potential Errors

There are quite a lot of potential errors in this lab. First and foremost is human error: given the very small timeframes involved, human error in stopwatch operation could significantly impact the results. Furthermore, inconsistencies between initial velocity and launch position caused by human error would also impact the results.

Secondly, the object in question (the cat toy) often continued to slide forward a non-negligible distance after making contact with the ground. This likely impacted the results in some way or another.

Thirdly, the conditions of the launches may have differed in some way that I did not notice. This would also impact the results.

Fourthly, the object in question (the cat toy) might not be representative of objects in general, and the optimal launch angle of this particular object may differ significantly from the optimal launch angle of most objects. For this reason, my conclusions do not attempt to extend these results beyond the specific object in question.

Finally, a malfunction or manufacturing error in the measuring devices used would also impact the results.

## Conclusion

The optimal launch angle for the specific object tested (a cat toy) is around 45 degrees.

This lab is relevant to our overall study of forces as it gives us practical experience and practice in using physics to describe and predict real-world events.
