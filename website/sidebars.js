module.exports = {
  overview_sidebar: {
    Overview: [
      "overview/overview_index",
      "overview/overview_creating_effects",
      "overview/overview_basic_operations",
      "overview/overview_handling_errors",
      "overview/overview_handling_resources",
      "overview/overview_basic_concurrency",
      "overview/overview_testing_effects",
      "overview/overview_running_effects",
      "overview/overview_background",
      "overview/overview_performance",
      "overview/overview_platforms"
    ]
  },
  "datatypes-sidebar": {
    "Overview": [
      "datatypes/index"
    ],
    "Core Data Types": [
      "datatypes/core/index",
      "datatypes/core/zio",
      "datatypes/core/uio",
      "datatypes/core/urio",
      "datatypes/core/task",
      "datatypes/core/rio",
      "datatypes/core/io",
      "datatypes/core/exit",
      "datatypes/core/cause",
      "datatypes/core/runtime"
    ],
    "Contextual Types": [
      "datatypes/contextual/index",
      "datatypes/contextual/has",
      "datatypes/contextual/zlayer",
      "datatypes/contextual/rlayer",
      "datatypes/contextual/ulayer",
      "datatypes/contextual/layer",
      "datatypes/contextual/urlayer",
      "datatypes/contextual/tasklayer"
    ],
    "Fiber Primitives": [
      "datatypes/fiber/index",
      "datatypes/fiber/fiber",
      "datatypes/fiber/fiberref",
      "datatypes/fiber/fiberid",
      "datatypes/fiber/fiberstatus"
    ],
    "Concurrency Primitives": [
      "datatypes/concurrency/index",
      "datatypes/concurrency/zref",
      "datatypes/concurrency/ref",
      "datatypes/concurrency/zrefsynchronized",
      "datatypes/concurrency/refsynchronized",
      "datatypes/concurrency/promise",
      "datatypes/concurrency/queue",
      "datatypes/concurrency/hub",
      "datatypes/concurrency/semaphore"
    ],
    "STM": [
      "datatypes/stm/index",
      "datatypes/stm/stm",
      "datatypes/stm/tarray",
      "datatypes/stm/tset",
      "datatypes/stm/tmap",
      "datatypes/stm/tref",
      "datatypes/stm/tpriorityqueue",
      "datatypes/stm/tpromise",
      "datatypes/stm/tqueue",
      "datatypes/stm/treentrantlock",
      "datatypes/stm/tsemaphore"
    ],
    "Resource Safety": [
      "datatypes/resource/index",
      "datatypes/resource/zmanaged",
      "datatypes/resource/managed",
      "datatypes/resource/task-managed",
      "datatypes/resource/rmanaged",
      "datatypes/resource/umanaged",
      "datatypes/resource/urmanaged"
    ],
    "Streaming": [
      "datatypes/stream/index",
      "datatypes/stream/zstream",
      "datatypes/stream/stream",
      "datatypes/stream/ustream",
      "datatypes/stream/ztransducer",
      "datatypes/stream/transducer",
      "datatypes/stream/zsink",
      "datatypes/stream/sink",
      "datatypes/stream/subscription-ref"
    ],
    "Miscellaneous": [
      "datatypes/misc/index",
      "datatypes/misc/chunk",
      "datatypes/misc/schedule",
      "datatypes/misc/supervisor"
    ]
  },
  "services-sidebar": {
    "Services": [
      "services/index",
      "services/console",
      "services/clock",
      "services/random",
      "services/blocking",
      "services/system"
    ]
  },
  "usecases-sidebar": {
    "Use Cases": [
      "usecases/usecases_index",
      "usecases/usecases_asynchronous",
      "usecases/usecases_concurrency",
      "usecases/usecases_parallelism",
      "usecases/usecases_queueing",
      "usecases/usecases_retrying",
      "usecases/usecases_scheduling",
      "usecases/usecases_streaming",
      "usecases/usecases_testing"
    ]
  },
  "howto-sidebar": {
    "Overview": ["howto/index"],
    "How to": [
      "howto/use-test-assertions",
      "howto/test-effects",
      "howto/mock-services",
      "howto/handle-errors",
      "howto/access-system-information",
      "howto/use-zio-macros"
    ],
    "Interop": [
      "howto/interop/with-cats-effect",
      "howto/interop/with-future",
      "howto/interop/with-java",
      "howto/interop/with-javascript",
      "howto/interop/with-monix",
      "howto/interop/with-scalaz-7x",
      "howto/interop/with-reactive-streams",
      "howto/interop/with-twitter",
      "howto/interop/with-guava"
    ],
    "Migrate": [
      "howto/migrate/from-monix"
    ]
  },
  "resources-sidebar": {
    "Overview": [
      "resources/index"
    ],
    "Learning": [
      "resources/learning/articles",
      "resources/learning/videos",
      "resources/learning/cookbooks",
      "resources/learning/cheatsheets",
      "resources/learning/sampleprojects",
      "resources/learning/poweredbyzio"
    ],
    "Ecosystem": [
      "resources/ecosystem/officials",
      "resources/ecosystem/community",
      "resources/ecosystem/compatible",
      "resources/ecosystem/tools",
      "resources/ecosystem/templates"
    ]
  },
  "about-sidebar": {
    "About": [
      "about/about_index",
      "about/about_coding_guidelines",
      "about/about_contributing",
      "about/about_coc"
    ]
  }
}