package backendMain.utils;

public class HitCheck {

    public static boolean hit(float x, float y, int r) {
        if (x >= 0 && y >= 0) {
            return y + x / 2 - (float) r / 2 <= 0;
        }
        if (x <= 0 && y >= 0) {
            return x * x + y * y <= (float) (r * r) / 4;
        }
        if (x <= 0 && y <= 0) {
            return -y <= r && -x <= (double) r / 2;
        }
        return false;
    }
}
