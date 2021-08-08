import { TransactionStatus } from "@/models";
import { NormalizeUtils } from "@/utils";
import { shallowMount } from "@vue/test-utils";
import TimelineStatus from "./TimelineStatus.vue";

describe("TimelineStatus.vue", () => {
  const status = TransactionStatus.created;

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(TimelineStatus);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders props.status when passed", () => {
    const wrapper = shallowMount(TimelineStatus, {
      propsData: { status },
    });

    expect(wrapper.vm.$props.status).toMatch(status);
  });

  it("renders css class after 500ms", (done) => {
    const wrapper = shallowMount(TimelineStatus, {
      propsData: { status },
    });

    const bar = wrapper.find('[data-testid="TimelineStatus-bar"]');
    const cssClass = `TimelineStatus-Line__bar--${NormalizeUtils(status)}`;

    expect(bar.classes(cssClass)).toBe(false);
    setTimeout(() => {
      expect(bar.classes(cssClass)).toBe(true);
      done();
    }, 500);
  });
});
