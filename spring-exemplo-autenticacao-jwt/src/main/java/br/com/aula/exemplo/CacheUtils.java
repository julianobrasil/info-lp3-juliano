package br.com.aula.exemplo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Component;

@Component
public class CacheUtils {
		@Autowired
		CacheManager cacheManager;

		public void evictAllCacheValues(String cacheName) {
				Cache cache = cacheManager.getCache(cacheName);
				
				cache.clear();
		}
		
		@CacheEvict(value = "userDetailsCachingStore", allEntries = true)
		public void evictAll() {}
		
		public void evictCachedUserFromAuthentication(String username) {
			Cache cache = cacheManager.getCache("userDetailsCachingStore");
			
			cache.evict(username);
		}
}
