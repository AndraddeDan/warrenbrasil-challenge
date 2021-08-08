import { shallowMount } from "@vue/test-utils";
import Header from "./Header.vue";

describe("Header.vue", () => {
  it("renders props.title and props.action", () => {
    const title = "Page's Title";
    const action = "action text";
    const wrapper = shallowMount(Header, {
      propsData: { title, action },
    });

    const headerTitle = wrapper.find('[data-testid="Header-title"]');
    const headerAction = wrapper.find('[data-testid="Header-action"]');

    expect(wrapper.vm.$props.title).toMatch(title);
    expect(headerTitle.text()).toMatch(title);

    expect(wrapper.vm.$props.action).toMatch(action);
    expect(headerAction.text()).toMatch(action);
  });
});
