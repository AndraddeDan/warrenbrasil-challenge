import { shallowMount } from "@vue/test-utils";
import ToggleViewer from "./ToggleViewer.vue";

import ClosedEyeIcon from "@/assets/icons/ClosedEyeIcon.svg";
import OpenedEyeIcon from "@/assets/icons/OpenedEyeIcon.svg";

describe("ToggleViewer.vue", () => {
  it("checks if only OpenedEye icon is render when  props.canShow is true", () => {
    const wrapper = shallowMount(ToggleViewer, {
      propsData: { canShow: true },
    });

    const hasOpenedEye = wrapper.findComponent(OpenedEyeIcon);
    const hasClosedEye = wrapper.findComponent(ClosedEyeIcon);

    expect(hasOpenedEye.exists()).toBe(true);
    expect(hasClosedEye.exists()).toBe(false);
  });

  it("checks if only ClosedEye icon is render when  props.canShow is false", () => {
    const wrapper = shallowMount(ToggleViewer, {
      propsData: { canShow: false },
    });

    const hasOpenedEye = wrapper.findComponent(OpenedEyeIcon);
    const hasClosedEye = wrapper.findComponent(ClosedEyeIcon);

    expect(hasOpenedEye.exists()).toBe(false);
    expect(hasClosedEye.exists()).toBe(true);
  });

  it("tests if the click trigger emit an event", () => {
    const wrapper = shallowMount(ToggleViewer, {
      propsData: { canShow: false },
    });

    const hasOpenedEye = wrapper.findComponent(OpenedEyeIcon);
    const hasClosedEye = wrapper.findComponent(ClosedEyeIcon);

    expect(hasOpenedEye.exists()).toBe(false);
    expect(hasClosedEye.exists()).toBe(true);
  });

  it("tests if the click trigger emit an event", async () => {
    const wrapper = shallowMount(ToggleViewer, {
      propsData: { canShow: false },
    });

    await wrapper.trigger("click");

    const change = wrapper.emitted().change;

    expect(change).toBeTruthy();
  });

  it("tests if the click trigger call the method", async () => {
    const wrapper = shallowMount(ToggleViewer, {
      propsData: { canShow: false },
    });

    const output = jest.fn();
    wrapper.setMethods({ output });

    await wrapper.trigger("click");

    expect(output).toBeCalled();
  });

  it("tests if method param inverse to the canShow prop when the method is called", async () => {
    const canShow = true;
    const wrapper = shallowMount(ToggleViewer, {
      propsData: { canShow },
    });

    const output = jest.fn();
    wrapper.setMethods({ output });

    await wrapper.trigger("click");

    expect(output.mock.calls[0][0]).toBe(!canShow);
  });
});
