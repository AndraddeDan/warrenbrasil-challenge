import { shallowMount } from "@vue/test-utils";
import ToggleViewer from "@/components/ToggleViewer/ToggleViewer.vue";

describe("ToggleViewer.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(ToggleViewer, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
