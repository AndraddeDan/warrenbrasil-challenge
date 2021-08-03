import { shallowMount } from "@vue/test-utils";
import FilterByStatus from "@/components/Filter/FilterByStatus.vue";

describe("FilterByStatus.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(FilterByStatus, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
