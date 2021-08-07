import { shallowMount } from "@vue/test-utils";
import Searcher from "./Searcher.vue";

describe("Searcher.vue", () => {
  const searchSelector = '[data-testid="Searcher-input"]';

  it("renders props.placeholder when passed", () => {
    const placeholder = "search here";
    const wrapper = shallowMount(Searcher, {
      propsData: { placeholder },
    });

    const input = wrapper.find(searchSelector);

    expect(input.element.getAttribute("placeholder")).toMatch(placeholder);
    expect(wrapper.vm.$props.placeholder).toMatch(placeholder);
  });

  it("renders props.value when passed", () => {
    const value = "searched value";
    const wrapper = shallowMount(Searcher, {
      propsData: { value },
    });

    const input = <HTMLInputElement>wrapper.find(searchSelector).element;

    expect(input.value).toMatch(value);
    expect(wrapper.vm.$props.value).toMatch(value);
  });
});
