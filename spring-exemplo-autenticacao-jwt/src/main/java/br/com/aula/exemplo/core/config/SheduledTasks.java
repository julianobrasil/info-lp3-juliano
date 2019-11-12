package br.com.aula.exemplo.core.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import br.com.aula.exemplo.CacheUtils;

@Component
public class SheduledTasks {

		@Autowired
		private CacheUtils cacheUtils;

		@Scheduled(fixedRate = 30000)
		public void evictAllcachesAtIntervals() {
				System.out.println("Clearing cache");
				this.cacheUtils.evictAllCacheValues("userDetailsCachingStore");
		}
}
