import { shallowMount } from "@vue/test-utils";
import GroupByDate from "@/components/GroupByDate/GroupByDate.vue";

describe("GroupByDate.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(GroupByDate, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
