import {MySource} from "./Source";

test("mytest", () => {
    expect(() => {
        MySource.loop(-0.5)
    }).toThrow();
}, 1000);