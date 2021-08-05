import { shallowMount } from "@vue/test-utils";
import TimelineStatus from "@/components/TimelineStatus/TimelineStatus.vue";

describe("TimelineStatus.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TimelineStatus, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
