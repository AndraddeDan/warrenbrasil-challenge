import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header/Header.vue";

describe("Header.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Header, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
