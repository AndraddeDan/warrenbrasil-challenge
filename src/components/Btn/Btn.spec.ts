import { shallowMount } from "@vue/test-utils";
import Btn from "@/components/Btn/Btn.vue";

describe("Btn.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Btn, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
