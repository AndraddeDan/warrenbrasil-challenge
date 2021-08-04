import { shallowMount } from "@vue/test-utils";
import Searcher from "@/components/Header/Searcher.vue";

describe("Searcher.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Searcher, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
