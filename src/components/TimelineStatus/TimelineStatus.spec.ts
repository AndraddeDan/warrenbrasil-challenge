import { TransactionStatus } from "@/models";
import { normalizeUtils } from "@/utils";
import { shallowMount } from "@vue/test-utils";
import TimelineStatus from "./TimelineStatus.vue";

describe("TimelineStatus.vue", () => {
  it("test if component is rendered ", () => {
    const wrapper = shallowMount(TimelineStatus);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders props.status when passed", () => {
    const status = TransactionStatus.created;
    const wrapper = shallowMount(TimelineStatus, {
      propsData: { status },
    });

    expect(wrapper.vm.$props.status).toMatch(status);
  });

  it("renders css class after 500ms", (done) => {
    const status = TransactionStatus.created;
    const wrapper = shallowMount(TimelineStatus, {
      propsData: { status },
    });

    const bar = wrapper.find('[data-testid="TimelineStatus-bar"]');
    const cssClass = `TimelineStatus-Line__bar--${normalizeUtils(status)}`;

    expect(bar.classes(cssClass)).toBe(false);
    setTimeout(() => {
      expect(bar.classes(cssClass)).toBe(true);
      done();
    }, 500);
  });
});
