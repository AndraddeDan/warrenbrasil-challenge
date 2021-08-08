import { shallowMount } from "@vue/test-utils";
import Header from "./Header.vue";

describe("Header.vue", () => {
  const headerSelector = '[data-testid="Header"]';
  const headerActionSelector = '[data-testid="Header-action"]';
  const headerTitleSelector = '[data-testid="Header-title"]';
  const slotInsideSelector = '[data-testid="Header-slotInside"]';
  const slotActionsSelector = '[data-testid="Header-slotActions"]';
  const trinagleIconSelector = '[data-testid="Header-triangleIcon"]';

  const title = "Page's Title";
  const action = "action text";

  const toggleHeaderClose = jest.fn();
  const headerClosed = true;

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(Header, {
      propsData: { title, action },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("renders props.title and props.action", () => {
    const wrapper = shallowMount(Header, {
      propsData: { title, action },
    });

    const headerTitle = wrapper.find(headerTitleSelector);
    const headerAction = wrapper.find(headerActionSelector);

    expect(wrapper.vm.$props.title).toMatch(title);
    expect(headerTitle.text()).toMatch(title);

    expect(wrapper.vm.$props.action).toMatch(action);
    expect(headerAction.text()).toMatch(action);
  });

  it("tests if the click trigger call the method", async () => {
    const wrapper = shallowMount(Header, {
      propsData: { title, action },
      methods: { toggleHeaderClose },
    });

    const btnAction = wrapper.find(headerActionSelector);
    await btnAction.trigger("click");

    expect(toggleHeaderClose).toBeCalled();
  });

  it("checks if header data changes when action is called", (done) => {
    const wrapper = shallowMount(Header, {
      propsData: { title, action },
      data: { headerClosed },
      methods: { toggleHeaderClose },
    });

    wrapper.setData({ headerClosed: !headerClosed });

    setTimeout(() => {
      expect(wrapper.vm.$data.headerClosed).toBe(!headerClosed);
      done();
    });
  });

  it("tests if header has css classes changed when it is opened", async (done) => {
    const wrapper = shallowMount(Header, {
      propsData: { title, action },
      data: { headerClosed },
    });

    const header = wrapper.find(headerSelector);
    const slotInside = wrapper.find(slotInsideSelector);
    const slotActions = wrapper.find(slotActionsSelector);
    const triangleIcon = wrapper.find(trinagleIconSelector);

    expect(header.classes("Header--closed")).toBe(true);
    expect(slotInside.classes("Slot-Inside--invisible")).toBe(true);
    expect(slotActions.classes("Slot-Actions--closed")).toBe(true);
    expect(triangleIcon.classes("Slot-Actions__icon--invert")).toBe(true);

    const btnAction = wrapper.find(headerActionSelector);
    await btnAction.trigger("click");

    setTimeout(() => {
      expect(header.classes("Header--closed")).toBe(false);
      expect(slotInside.classes("Slot-Inside--invisible")).toBe(false);
      expect(slotActions.classes("Slot-Actions--closed")).toBe(false);
      expect(triangleIcon.classes("Slot-Actions__icon--invert")).toBe(false);
      done();
    });
  });
});
