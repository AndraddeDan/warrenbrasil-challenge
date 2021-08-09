import { FilterEvents, TransactionStatus } from "@/models";
import { shallowMount } from "@vue/test-utils";
import FilterByStatus from "./FilterByStatus.vue";

describe("FilterByStatus.vue", () => {
  const allBtnSelector = '[data-testid="FilterByStatus-allBtn"]';
  const output = jest.fn();
  const enabledFilters = [
    TransactionStatus.created,
    TransactionStatus.processed,
  ];

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(FilterByStatus);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders active buttons when the props.enabledFilters is passed", (done) => {
    const wrapper = shallowMount(FilterByStatus, {
      propsData: { enabledFilters },
    });

    const activeButtons = wrapper.findAll(".FilterByStatus__button--active");
    expect(activeButtons.length).toBe(2);

    wrapper.setProps({ enabledFilters: [] });

    setTimeout(() => {
      const onlyAllBtn = wrapper.findAll(".FilterByStatus__button--active");
      expect(onlyAllBtn.length).toBe(1);
      expect(wrapper.vm.$props.enabledFilters.length).toBe(0);
      done();
    });
  });

  it("checks buttons quantity", () => {
    const wrapper = shallowMount(FilterByStatus);
    const fixedButtons = 1;
    const statusButtons = Object.keys(TransactionStatus).length;
    const buttonsLength = statusButtons + fixedButtons;

    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(buttonsLength);
  });

  it("tests if the component emit an custom event", async () => {
    const wrapper = shallowMount(FilterByStatus, {
      methods: { output },
      propsData: { enabledFilters },
    });

    wrapper.vm.$emit("disable");
    expect(wrapper.emitted().disable).toBeTruthy();
  });

  it("tests if method param is passed correctly", async () => {
    const wrapper = shallowMount(FilterByStatus, {
      methods: { output },
    });

    const allBtn = wrapper.find(allBtnSelector);
    await allBtn.trigger("click");

    expect(output.mock.calls[0][0]).toBe(FilterEvents.DISABLE);
    expect(output.mock.calls[0][1].toString()).toBe(
      Object.values(TransactionStatus).toString()
    );
  });

  it("tests if the click trigger call the method", async () => {
    const wrapper = shallowMount(FilterByStatus, {
      methods: { output },
    });

    const allBtn = wrapper.find(allBtnSelector);
    await allBtn.trigger("click");

    expect(output).toBeCalled();
  });
});
