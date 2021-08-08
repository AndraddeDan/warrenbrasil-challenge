import { shallowMount } from "@vue/test-utils";
import Searcher from "./Searcher.vue";

describe("Searcher.vue", () => {
  const searchSelector = '[data-testid="Searcher-input"]';

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(Searcher);
    expect(wrapper.exists()).toBe(true);
  });

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

  it("tests if the input trigger emit an event", async () => {
    const wrapper = shallowMount(Searcher);

    const input = wrapper.find(searchSelector);
    input.trigger("input");

    const event = wrapper.emitted().input;

    expect(event).toBeTruthy();
  });

  it("tests if the input trigger call the method", () => {
    const output = jest.fn();
    const wrapper = shallowMount(Searcher, {
      methods: { output },
    });

    const input = wrapper.find(searchSelector);
    input.trigger("input");

    expect(output).toHaveBeenCalled();
  });
});
